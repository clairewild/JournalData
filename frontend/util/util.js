export const fetchData = () => (
  $.ajax({
    method: 'GET',
    url: `/data`
  })
);

export const uploadFile = file => (
  $.ajax({
    method: 'POST',
    url: `/upload`,
    file
  })
);
