function FindProxyForURL(url, host) {
    // Список доменов, которые МЫ ХАКНУЛИ
    if (shExpMatch(host, "*.x.ai") || shExpMatch(host, "x.ai") || shExpMatch(host, "*.twitter.com") || shExpMatch(host, "x.com")) {
        // Мы используем HTTPS, но БЕЗ указания порта 443 в конце, 
        // так как Hugging Face сам разруливает SSL.
        return "HTTPS bksirlancelot-my-grok-unlocked.hf.space";
    }

    // Весь остальной интернет (гугл, вк и тд) — НАПРЯМУЮ, чтобы не лагало
    return "DIRECT";
}
