async function test() {
  const data = await new Promise(res => setTimeout(() => {
    res('done');
  }, 2000));
  return data;
}


export default test;
