import qs from 'query-string';

export const ticket = "/ticket";
export const community = "/community";
export const my = "/my";
export const my_point = "/my/point";

// guestbook
export interface GuestbookWorkflowQuery {
  marriageId: number;
  isOnline: boolean;
}
export const guestbook_workflow = (query?: GuestbookWorkflowQuery) => {
  const querystring = query
    ? '?' + qs.stringify(query as any)
    : '';
  return `/guestbook/workflow${querystring}`
};
export const guestbook_workflow_success = "/guestbook/workflow/success";
export const guestbook_qrcode = `/guestbook/find-by-qrcode`;
export const guestbook_phone = "/guestbook/find-by-phone";
export const guestbook = "/guestbook";

export const guestbook_comment = "/guestbook/comment";
export const guestbook_comment_success = "/guestbook/comment/success";
export const guestbook_comment_write = (marriageId?: number) => (marriageId !== undefined)
  ? `/guestbook/comment/write/${marriageId}`
  : `/guestbook/comment/write/:marriageId`;

export const data = "/data-manage";
export const data_detail = `${data}/detail`;
export const data_calendar = `${data}/calendar`;
export const data_marriage = `${data}/marriage`;
export const data_statistics = `${data}/statistics`;
