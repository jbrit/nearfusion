export default class Storage {
  /**
   * Save data to localStorage.
   * @param {string} key - The key to save the data under.
   * @param {T} data - The data to be saved.
   */
  static saveToLocalStorage = <T>(key: string, data: T): void => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error("Error saving data to localStorage:", error);
    }
  };

  /**
   * Delete data from localStorage for a specific key.
   * @param {string} key - The key to delete data for.
   */
  static deleteFromLocalStorage = (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error deleting data from localStorage:", error);
    }
  };

  /**
   * Get data from localStorage for a specific key.
   * @param {string} key - The key to get data for.
   * @returns {T} - The data retrieved from localStorage, or null if not found.
   */
  static getFromLocalStorage = <T>(key: string): T | null => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Error getting data from localStorage:", error);
      return null;
    }
  };
}
