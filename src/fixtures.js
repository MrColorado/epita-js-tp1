// FIXME: add some meaningful data

const pictures = [];
for (let i = 0; i < 50; i++)
  pictures[i] = `https://picsum.photos/id/${i}/400`;

export default pictures;

const data = [];

if (data.length === 0) {
  pictures.forEach(function(element) {
    data.push(element);
  })
}
