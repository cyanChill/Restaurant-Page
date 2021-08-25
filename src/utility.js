export default function kebabCasefy(str) {
  return str.toLowerCase().replace(/\s/g, "-");
}
