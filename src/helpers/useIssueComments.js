import {useQuery} from "react-query";

const useIssueComments = (issueNumber) => {
  return useQuery(
    ["issues", issueNumber, "comments"],
    () => {
      return fetch(`/api/issues/${issueNumber}/comments`).then(res => res.json());
    });
}

export default useIssueComments;