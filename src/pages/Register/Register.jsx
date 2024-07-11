import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

function Register() {
  const { tableId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.setItem('tableId', tableId);
    navigate('/menu');
  }, [tableId]);

  return (
    <div></div>
  )
}

export default Register
