import styled from "styled-components";

export const GalleryContainer = styled.div((props) => {
  const { hid } = props;
  return `
	display: ${hid} ;
        position: absolute;
        z-index: 3;
        width: 400px;
        top: 36px;
	`;
});
export const Gallery = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  background-color: silver;
  gap: 10px;
`;
export const GalleryItem = styled.div`
  width: 100px;
`;
