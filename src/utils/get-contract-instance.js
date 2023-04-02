import { ethers } from "ethers";
import abi from "../ABIs/Crowdfunding.json";

export const getContractInstance = (signer = null) => {
  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:7545"
  );
  return new ethers.Contract(
    "0x2300a063080DfFFd621F878CeD5fFDDcf7850357",
    abi,
    signer || provider
  );
};
