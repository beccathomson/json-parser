import { BinTreeNode, parseTree, parseTreeFromJson } from './BinaryParser';

describe('BinaryParser', () => {
  describe('parseTreeFromJson', () => {
    it('should parse valid JSON string into a BinTreeNode', () => {
      const jsonString = '{"id": 1, "left": {"id": 2}, "right": {"id": 3}}';
      const expectedTree: BinTreeNode = {
        id: 1,
        left: {
          id: 2,
        },
        right: {
          id: 3,
        },
      };

      const result = parseTreeFromJson(jsonString);

      expect(result).toEqual(expectedTree);
    });

    it('should return null for invalid JSON string', () => {
      const jsonString = 'invalid json string';

      const result = parseTreeFromJson(jsonString);

      expect(result).toBeNull();
    });

    it('should return null for empty JSON string', () => {
      const jsonString = '';

      const result = parseTreeFromJson(jsonString);

      expect(result).toBeNull();
    });
  });

  describe('parseTree', () => {
    it('should parse valid file input array into a BinTreeNode', () => {
      const fileInput = '[1, [2], [3]]';
      const expectedTree: BinTreeNode = {
        id: 1,
        left: {
          id: 2,
        },
        right: {
          id: 3,
        },
      };

      const result = parseTree(fileInput);

      expect(result).toEqual(expectedTree);
    });

    it('should return null for invalid file input array', () => {
      const fileInput = 'invalid file input';

      const result = parseTree(fileInput);

      expect(result).toBeNull();
    });

    it('should return null for empty file input array', () => {
      const fileInput = '';

      const result = parseTree(fileInput);

      expect(result).toBeNull();
    });
  });
});
