const deployUrl: string = "https://back-end-produtos-git-main-apolowilkers-projects.vercel.app/";
const baseUrl: string = "http://localhost:3000" || deployUrl;

export interface DataListCategory {
  id: string;
  name: string;
  doce_count: string;
}

export const fetchCategories = async (): Promise<DataListCategory[]> => {
  try {
    const response = await fetch(`${baseUrl}/categories`);
    if (!response.ok) {
      throw new Error('Erro ao buscar categorias');
    }
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
};

