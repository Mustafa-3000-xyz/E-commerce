import styled from 'styled-components';
import { Link } from 'react-router-dom';
// ======================================================= //
export default function Product(props) {

  return <Link  data-id ={props.id} className='text-decoration-none' to={`/show_product/${props.id}`}>
    <StyledWrapper>
      <div style={{maxWidth: props.category == "tv" ? 250 : 200}} className="card cursor-pointer p-3">
        <div className="card-image-container">
            <img className=' w-100 h-100' src={props.img} alt='' />
        </div>

        <div>
          <p className="card-title">{props.title}</p>
          <p className="card-des">
            {props.about}
          </p>
        </div>

        <hr className='m-0 my-1' />

        <div className=' d-flex justify-content-between align-items-center'>
          <p className='m-0 text-success fw-medium'>{props.price}$</p>
          <div>
            {props.category}
          </div>
        </div>
      </div>
    </StyledWrapper>
  </Link>
}

const StyledWrapper = styled.div`
  .card {
    display: flex;
    flex-direction: column;
    max-width: 200px;
    max-height: 330px;
    background-color: var(--white);
    border-radius: 10px;
    box-shadow: 0px 10px 12px rgba(0, 0, 0, 0.08),
    -4px -4px 12px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    transition: all 0.3s;
    cursor: pointer;
    box-sizing: border-box;
    padding: 10px;
  }

  .card:hover {
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1),
      -4px -4px 12px rgba(0, 0, 0, 0.08);
  }

  .card-image-container {
    width: 100%;
    height: 290px;
    border-radius: 10px;
    margin-bottom: 12px;
    overflow: hidden;
    background-color: rgb(165, 165, 165);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-icon {
    font-size: 40px;
  }

  .card-title {
    margin: 0;
    font-size: 17px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-weight: 600;
    color: #1797b8;
    cursor: default;
    -webkit-box-orient: vertical;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
  }

  .card-des {
    -webkit-box-orient: vertical;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    margin: 0;
    font-size: 13px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    color: #1797b8;
    cursor: default;
  }`;