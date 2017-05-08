export const fetchData = () => (
  $.ajax({
    method: 'GET',
    url: `/test`
  })
);
