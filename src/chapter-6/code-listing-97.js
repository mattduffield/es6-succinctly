let processMarkup = (markup, data) => {
  let fields = markup.match(/{(.+?)}/g);
  let args = [];
  let params = [];
  fields.forEach((field,index,list) => {
    field = field.replace(/{/g, '');
    field = field.replace(/}/g, '');
    args.push(data[field]);
    params.push(field);
  });
  let template = markup.replace(/{/g, '${');
  let fn = assemble(template, params);
  let render = fn.apply(null, args);
  return render;
}
let assemble = (template, params) => {
  return new Function(params, "return `" + template +"`;");
}
let markup = `Hello {fname} {lname}, how are you?`;
let data = { fname: "Matthew", lname: "Duffield" };
let template = processMarkup(markup, data);
console.log(template);
