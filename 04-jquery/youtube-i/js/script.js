const links = document.querySelectorAll('a');
for (let i = 0; i < links.length; i++) {
    const link = links[i];
    const href = link.href;
    const thumbnail = youtube.generateThumbnailUrl(href);
    const img = document.createElement('img');
    img.src = thumbnail;
    link.appendChild(img);
}