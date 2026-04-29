import { displayYear, displayDept, displayChannelLabel } from '../src/js/utils/helpers.js';

describe('Helpers', () => {
  describe('displayYear', () => {
    it('formats year numbers to ordinals', () => {
      expect(displayYear("1")).toBe("1st Year");
      expect(displayYear("2")).toBe("2nd Year");
      expect(displayYear("3")).toBe("3rd Year");
      expect(displayYear("4")).toBe("4th Year");
    });

    it('falls back to "Year X" for unknown years', () => {
      expect(displayYear("5")).toBe("Year 5");
    });
  });

  describe('displayDept', () => {
    it('maps known department codes to full names', () => {
      expect(displayDept("CSE-AIML")).toBe("CSE (AI & ML)");
      expect(displayDept("IT")).toBe("Information Technology");
    });

    it('returns original code if unknown', () => {
      expect(displayDept("UNKNOWN-DEPT")).toBe("UNKNOWN-DEPT");
    });
  });

  describe('displayChannelLabel', () => {
    it('maps channel IDs to labels', () => {
      expect(displayChannelLabel("general")).toBe("General");
      expect(displayChannelLabel("hostel")).toBe("Hostel & Campus");
    });

    it('returns original ID if unknown', () => {
      expect(displayChannelLabel("unknown-channel")).toBe("unknown-channel");
    });
  });
});
