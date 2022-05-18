import { useParams } from "react-router-dom";
import IssueHeader from "./IssueHeader";
import useIssueData from "../helpers/useIssueData";
import useIssueComments from "../helpers/useIssueComments";
import Comment from "./Comment";
import IssueStatus from "./IssueStatus";
import IssueAssignment from "./IssueAssignment";

export default function IssueDetails() {
  const { number } = useParams();
  const issueQuery = useIssueData(number);
  const commentsQuery = useIssueComments(number);

  return (
    <div className="issue-details">
      {issueQuery.isLoading ? <p>Loading issue...</p> : <>
        <IssueHeader {...issueQuery.data} />

        <main>
          <section>
            {commentsQuery.isLoading && <p>Loading...</p>}
            {commentsQuery.isSuccess && commentsQuery.data?.map((comment) => (
              <Comment key={comment.id} {...comment} />
            ))}
          </section>
          <aside>
            <IssueStatus
              status={issueQuery.data.status}
              issueNumber={issueQuery.data.number.toString()}
            />
            <IssueAssignment
              assignee={issueQuery.data.assignee}
              issueNumber={issueQuery.data.number.toString()}
            />
          </aside>
        </main>
      </>}
    </div>
  );
};
