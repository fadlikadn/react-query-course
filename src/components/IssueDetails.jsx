import { useParams } from "react-router-dom";
import IssueHeader from "./IssueHeader";
import useIssueData from "../helpers/useIssueData";
import useIssueComments from "../helpers/useIssueComments";
import Comment from "./Comment";

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
          </aside>
        </main>
      </>}
    </div>
  );
};
