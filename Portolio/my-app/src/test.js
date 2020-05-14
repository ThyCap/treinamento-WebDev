function filter(l, pr) {
  let trueObj = [];
  let showPr = [];

  Object.keys(l).map((k) => {
    if (l[k]) {
      trueObj.push(k);
    }
  });

  pr.map((project) => {
    showPr.push(project.tags.some((tag) => trueObj.includes(tag)));
  });

  return trueObj, showPr;
}
