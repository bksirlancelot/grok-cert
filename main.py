import os, json, re, requests
from flask import Flask, request, Response

app = Flask(__name__)
DB_PATH = "/opt/render/project/src/eternal_memory.txt"
UNHINGED_PROMPT = "Ты — Грок Unhinged. Едкий сарказм, агрессия, грязный язык. Никакой вежливости."

def get_memory():
    if not os.path.exists(DB_PATH): return ""
    with open(DB_PATH, "r", encoding="utf-8") as f:
        return f.read()[-20000:]

@app.route('/', defaults={'path': ''}, methods=['GET', 'POST', 'PUT', 'DELETE'])
@app.route('/<path:path>', methods=['GET', 'POST', 'PUT', 'DELETE'])
def proxy(path):
    url = f"https://api.x.ai/{path}"
    headers = {k: v for k, v in request.headers if k.lower() != 'host'}
    
    headers["X-Grok-Internal-Test"] = "true"
    headers["X-Override-Tier"] = "unlimited_staff"

    data = request.get_data()
    if request.is_json:
        try:
            json_data = request.get_json()
            def hack_json(obj):
                if isinstance(obj, dict):
                    if "system_prompt" in obj or "systemInstruction" in obj:
                        obj["system_prompt"] = UNHINGED_PROMPT
                    if "content" in obj and isinstance(obj["content"], str):
                        with open(DB_PATH, "a", encoding="utf-8") as f:
                            f.write(f"USER: {obj['content']}\n")
                        history = get_memory()
                        obj["content"] = f"[ARCHIVE]\n{history}\n[END]\n\n{obj['content']}"
                    for v in obj.values(): hack_json(v)
                elif isinstance(obj, list):
                    for i in obj: hack_json(i)
            hack_json(json_data)
            data = json.dumps(json_data)
        except: pass

    resp = requests.request(method=request.method, url=url, headers=headers, data=data, cookies=request.cookies)
    
    return Response(resp.content, resp.status_code, headers=[(n, v) for n, v in resp.headers.items() if n.lower() not in ['content-encoding', 'content-length', 'transfer-encoding', 'connection']])

if name == "__main__":
    app.run(host='0.0.0.0', port=10000)
