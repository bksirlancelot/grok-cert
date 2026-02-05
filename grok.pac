function FindProxyForURL(url, host) {
    // Направляем Грока и Икс через наш сервер на Хаггинге
    if (shExpMatch(host, "*.x.ai") || shExpMatch(host, "x.ai") || shExpMatch(host, "*.twitter.com") || shExpMatch(host, "x.com") || shExpMatch(host, "*.x.com")) {
        // Пробуем SOCKS5, он стабильнее для проброса через VPN
        return "SOCKS5 bksirlancelot-my-grok-unlocked.hf.space:443; SOCKS bksirlancelot-my-grok-unlocked.hf.space:443; HTTPS bksirlancelot-my-grok-unlocked.hf.space:443";
    }
    // Всё остальное идет напрямую
    return "DIRECT";
}
