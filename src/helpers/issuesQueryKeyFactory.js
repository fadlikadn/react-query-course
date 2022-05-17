const issuesQueryKeyFactory = (owner, repo, status, labels, assignee) => {
  const filters = {};
  if (status) {
    filters.status = status;
  }
  if (labels) {
    filters.labels = labels;
  }
  if (assignee) {
    filters.assignee = assignee;
  }

  return ["issues", owner, repo, filters];
}

export default issuesQueryKeyFactory;