import { useParams } from "react-router-dom";
import IssueHeader from "./IssueHeader";
import useIssueData from "../helpers/useIssueData";
import useIssueComments from "../helpers/useIssueComments";
import Comment from "./Comment";
import IssueStatus from "./IssueStatus";
import IssueAssignment from "./IssueAssignment";
import IssueLabels from "./IssueLabels";
import useScrollToBottomAction from "../helpers/useScrollToBottomAction";
import Loader from "./Loader";

export default function IssueDetails() {
  const { number } = useParams();
  const issueQuery = useIssueData(number);
  const commentsQuery = useIssueComments(number);

  useScrollToBottomAction(document, commentsQuery.fetchNextPage, 100);

  return (
    <div className="issue-details">
      {issueQuery.isLoading ? <p>Loading issue...</p> : <>
        <IssueHeader {...issueQuery.data} />

        <main>
          <section>
            {commentsQuery.isLoading && <p>Loading...</p>}
            {!commentsQuery.isLoading && commentsQuery.data?.pages.map((commentPage) =>
              commentPage.map((comment) => (
                <Comment key={comment.id} {...comment} />
              ))
            )}
            {commentsQuery.isFetchingNextPage && <Loader />}
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
            <IssueLabels
              labels={issueQuery.data.labels}
              issueNumber={issueQuery.data.number.toString()}
            />
          </aside>
        </main>
      </>}
    </div>
  );
};
