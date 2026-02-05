function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.x.ai") || shExpMatch(host, "x.ai") || shExpMatch(host, "*.twitter.com") || shExpMatch(host, "x.com")) {
        // Убираем HTTPS/SOCKS5, пробуем обычный PROXY туннель
        return "PROXY bksirlancelot-my-grok-unlocked.hf.space:443";
    }
    return "DIRECT";
}
