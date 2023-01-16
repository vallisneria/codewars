function domainName(url){
    const url_protocol_regex = /^https?:\/\//i;
    const url_path_regex = /(\/\S+)*/i;

    return url.replace(url_protocol_regex, '')
        .replace(url_path_regex, '')
        .replace('www.', '')
        .split('.')[0];
}