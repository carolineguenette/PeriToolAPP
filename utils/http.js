import axios from "axios";

const dbAPIRoot = "http://localhost:8080";

exports.httpRequest = (path, postDatas) => {
  console.log(`http.httpRequest(${path}, ${postDatas})`);
  return axios.post(dbAPIRoot + path, postDatas);
};

export async function consoleLogFetchTest() {
  const response = await fetch("http://localhost:8080/lists/bloodgroups");
  const answer = await response.json();
  console.log(answer);
}
