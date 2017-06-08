export const fetchData = () => (
  $.ajax({
    method: 'GET',
    url: `/data`
  })
);

// export const uploadFile = data => (
//   $.ajax({
//     method: 'POST',
//     url: `/upload`,
//     body: data
//   })
// );
