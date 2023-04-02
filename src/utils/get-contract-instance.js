import { ethers } from "ethers";
import abi from "../ABIs/Crowdfunding.json";

export const getContractInstance = (signer = null) => {
  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:7545"
  );
  return new ethers.Contract(
    "0xA5f8D6235A8863da3Af0128B57a2f80e48964306",
    abi,
    signer || provider
  );
};
