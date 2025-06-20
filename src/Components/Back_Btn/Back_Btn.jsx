import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Back_Btn = (props) => {
    return (
        <StyledWrapper>
            <Link to={props.path}>
                <button className="pushable position-absolute bottom-0 start-0 m-3">
                    <span className="shadow" />
                    <span className="edge" />
                    <span className="front fw-bolder"> BACK </span>
                </button>
            </Link>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .pushable {
    background: transparent;
    padding: 0px;
    border: none;
    cursor: pointer;
    outline-offset: 4px;
    outline-color: deeppink;
    transition: filter 250ms;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: hsl(226, 25%, 69%);
    border-radius: 8px;
    filter: blur(2px);
    will-change: transform;
    transform: translateY(2px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  .edge {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 8px;
    background: rgb(241, 240, 240)
  }

  .front {
    display: block;
    position: relative;
    border-radius: 8px;
    background: #008ECC;
    padding: 16px 32px;
    color: white;
    font-weight: 600;
    letter-spacing: 1.5px;
    font-size: 1rem;
    transform: translateY(-4px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  .pushable:hover {
    filter: brightness(110%);
  }

  .pushable:hover .front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  .pushable:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }

  .pushable:hover .shadow {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  .pushable:active .shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }

  .pushable:focus:not(:focus-visible) {
    outline: none;
  }`;

export default Back_Btn;