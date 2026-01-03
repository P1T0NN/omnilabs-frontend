export function getIssueMessages(allIssues?: () => Array<{ message: string }> | undefined): string {
    return allIssues?.()?.map((issue) => issue.message).join(', ') ?? '';
}