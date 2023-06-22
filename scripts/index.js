document.getElementById("generate").onclick = () => {
    const website = document.getElementById("website").value;
    const master = document.getElementById("master").value;

    document.getElementById("output").value = `!SYN?${hex_md5(master + website).substr(7, 12)}`;
}

document.getElementById("copy").onclick = () => {
    navigator.clipboard.writeText(document.getElementById("output").value);
    setTimeout(function () {
        document.getElementById("master").value = "";
        document.getElementById("output").value = "";
    }, 1);
}