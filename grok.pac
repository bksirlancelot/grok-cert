function FindProxyForURL(url, host) {
    // Список доменов для Грока и Икса
    if (shExpMatch(host, "*.x.ai") || shExpMatch(host, "x.ai") || shExpMatch(host, "*.twitter.com") || shExpMatch(host, "x.com") || shExpMatch(host, "*.x.com")) {
        // Используем HTTPS прокси, чтобы Хаггинг принял соединение
        return "HTTPS bksirlancelot-my-grok-unlocked.hf.space:443";
    }

    // Всё остальное идет напрямую (через твой инет)
    return "DIRECT";
}
