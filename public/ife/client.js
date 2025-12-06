if (window.location.hostname === 'imagequest.vercel.app' || window.location.hostname === 'localhost') {
  const currentPath = window.location.pathname + window.location.search + window.location.hash;
  const targetUrl = 'https://rafdo.netlify.app/games/imgquest' + currentPath;
  window.location.replace(targetUrl);
}