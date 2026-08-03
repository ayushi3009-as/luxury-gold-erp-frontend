const API_URL = "http://localhost:5000/api";

export interface JobCard {
  id: string;
  jobCardNumber: string;
  productName: string;
  designNumber?: string;
  category?: string;
  purity?: string;
  grossWeight?: number;
  netWeight?: number;
  quantity: number;
  priority?: string;
  status: string;
  remarks?: string;
  createdById: string;
}

export async function getJobCards(token: string) {
  const response = await fetch(`${API_URL}/job-cards`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch Job Cards");
  }

  return response.json();
}

export async function deleteJobCard(id: string, token: string) {
  const response = await fetch(`${API_URL}/job-cards/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete Job Card");
  }

  return response.json();
}