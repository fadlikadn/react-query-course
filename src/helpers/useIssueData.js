import {useQuery} from "react-query";

const useIssueData = (issueNumber) => {
  return useQuery(["issues", issueNumber], ({ signal }) => {
    return fetch(`/api/issues/${issueNumber}`, { signal }).then(res => res.json());
  });
}

export default useIssueData;