module.exports = (req, res) => {
  const { path } = req.params;
  const hasExtension = path.includes(".");
  
  if (!hasExtension && path.charAt(path.length - 1) !== "/") {
    res.writeHead(301, {
      Location: `${req.url}/`
    });
    res.end();
    return;
  }

  return res.status(200).send();
};
