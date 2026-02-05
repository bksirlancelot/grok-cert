function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.x.ai") || shExpMatch(host, "x.ai") || shExpMatch(host, "*.twitter.com") || shExpMatch(host, "x.com")) {
        return "SOCKS bksirlancelot-my-grok-unlocked.hf.space:443; DIRECT";
    }
    return "DIRECT";
}
