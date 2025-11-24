function getXMLHttpRequest() {
    try { return new XMLHttpRequest(); }
    catch (e) {}
    try { return new ActiveXObject("Msxml2.XMLHTTP"); }
    catch (e) {}
    try { return new ActiveXObject("Microsoft.XMLHTTP"); }
    catch (e) {}
    throw new Error("No XMLHttpRequest implementation available");
}

export function getBinaryContent(path, callback) {
    const xhr = getXMLHttpRequest();
    xhr.open("GET", path, true);
    xhr.responseType = "arraybuffer";

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.response);
            } else {
                callback(new Error("Error loading file " + xhr.status));
            }
        }
    };

    xhr.send(null);
}

export default { getBinaryContent };
