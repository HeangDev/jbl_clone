import axios from 'axios';
import { BANK_URL } from "../lib/ApiEndPoints";

export async function fetchBank(token, customer_uuid) {
  try {
    const res = await axios.get(
      BANK_URL, 
      { customer_uuid }, 
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data; // Axios automatically parses JSON
  } catch (error) {
    console.error("Error fetching bank data:", error.message);
    throw error;
  }
}
