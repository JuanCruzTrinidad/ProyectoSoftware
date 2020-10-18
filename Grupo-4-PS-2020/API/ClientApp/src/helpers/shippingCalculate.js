import Axios from "axios";
import { useState } from "react";
const API_KEY = "819eec64c7e9fe943501a6c67587f0c26d2978f7";
const SECRET_KEY = "cc90512c17c6e50a5af9801139dd0f56a2dc4c1e";

export const useShippingCalculate = (
  provincia,
  codigo_postal,
  products = []
) => {

  const [response, setresponse] = useState('');

  var urlToken = new URL("https://api.enviopack.com/auth");
  var params = new URLSearchParams();
  params.append("api-key", API_KEY);
  params.append("secret-key", SECRET_KEY); //params auth

  var paquetes = "";
  var peso = 0;
  products.map((p, i) => {
    //añado medidas de paquetes y peso
    paquetes =
      paquetes +
      `${p.atributoselecc[0].alto}x${p.atributoselecc[0].ancho}x${p.atributoselecc[0].profundidad},`;
    peso += p.atributoselecc[0].peso;
  });

  var urlRequest = new URL(
    "https://api.enviopack.com/cotizar/precio/a-domicilio"
  ); //añado params
  urlRequest.searchParams.append("provincia", provincia);
  urlRequest.searchParams.append("codigo_postal", codigo_postal);
  urlRequest.searchParams.append("peso", peso);
  urlRequest.searchParams.append("paquetes", paquetes);

  Axios.post(urlToken, params).then(({ data }) => {
    Axios.get(urlRequest, {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    }).then((response) => {
      setresponse(response);
    });
  });

  return response;
};
