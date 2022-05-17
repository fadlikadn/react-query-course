import {useQuery} from "react-query";

const useIssueComments = (issueNumber) => {
  return useQuery(
    ["issues", issueNumber, "comments"],
    ({ signal }) => {
      return fetch(`/api/issues/${issueNumber}/comments`, { signal }).then(res => res.json());
    });
}

export default useIssueComments;