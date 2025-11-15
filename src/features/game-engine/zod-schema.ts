import { z } from 'zod';

// Scene node schema and type
export const sceneNodeSchema = z.object({
  id: z.string(),
  type: z.literal('scene'),
  data: z.object({
    headline: z.string().nullable().optional(),
    text: z.string().nullable().optional(),
    option1: z.string().nullable().optional(),
    option2: z.string().nullable().optional(),
    option3: z.string().nullable().optional(),
  }),
});

export type SceneNodeType = z.infer<typeof sceneNodeSchema>;

// Start node schema and type
export const startNodeSchema = z.object({
  id: z.string(),
  type: z.literal('start'),
});

export type StartNodeType = z.infer<typeof startNodeSchema>;

// Random node schema and type
export const randomNodeSchema = z.object({
  id: z.string(),
  type: z.literal('random'),
});

export type RandomNodeType = z.infer<typeof randomNodeSchema>;

// StockUp node schema and type
export const stockUpNodeSchema = z.object({
  id: z.string(),
  type: z.literal('stockUp'),
});

export type StockUpNodeType = z.infer<typeof stockUpNodeSchema>;

// End node schema and type
export const endNodeSchema = z.object({
  id: z.string(),
  type: z.literal('end'),
  data: z.object({
    headline: z.string().nullable().optional(),
    text: z.string().nullable().optional(),
  }),
});

export type EndNodeType = z.infer<typeof endNodeSchema>;

// SetState node schema and type
export const setStateNodeSchema = z.object({
  id: z.string(),
  type: z.literal('setState'),
  data: z.object({
    demandA: z.coerce.number().nullable().optional(),
    demandB: z.coerce.number().nullable().optional(),
    priceA: z.coerce.number().nullable().optional(),
    priceB: z.coerce.number().nullable().optional(),
    sentimentPro: z.coerce.number().nullable().optional(),
    sentimentNeutral: z.coerce.number().nullable().optional(),
    sentimentAgainst: z.coerce.number().nullable().optional(),
  }),
});

export type SetStateNodeType = z.infer<typeof setStateNodeSchema>;

// If node schema and type
export const ifNodeSchema = z.object({
  id: z.string(),
  type: z.literal('if'),
  data: z.object({
    threshold: z.coerce.number().nullable().optional(),
  }),
});

export type IfNodeType = z.infer<typeof ifNodeSchema>;

// Union type for all node types
export type UnionNodeType =
  | SceneNodeType
  | StartNodeType
  | RandomNodeType
  | StockUpNodeType
  | EndNodeType
  | SetStateNodeType
  | IfNodeType;

// Game schema using discriminated union
export const gameSchema = z.object({
  nodes: z.array(
    z.discriminatedUnion('type', [
      sceneNodeSchema,
      startNodeSchema,
      randomNodeSchema,
      stockUpNodeSchema,
      endNodeSchema,
      setStateNodeSchema,
      ifNodeSchema,
    ]),
  ),
  edges: z.array(
    z.union([
      z.object({
        markerEnd: z.object({ type: z.string() }),
        source: z.string(),
        sourceHandle: z.string().optional(),
        target: z.string(),
      }),
    ]),
  ),
});

export type GameSchema = z.infer<typeof gameSchema>;
