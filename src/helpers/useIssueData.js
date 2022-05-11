import {useQuery} from "react-query";

const useIssueData = (issueNumber) => {
  return useQuery(["issues", issueNumber], () => {
    return fetch(`/api/issues/${issueNumber}`).then(res => res.json());
  });
}

export default useIssueData;