// declare module "*.svg" {
//   const content: React.FunctionComponent<SVGAttributes<SVGElement>>;
//   export default content;
// }
declare module "*.svg" {
  const content: string;
  export default content;
}
