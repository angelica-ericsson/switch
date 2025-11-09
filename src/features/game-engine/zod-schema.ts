import { z } from 'zod';

export const gameSchema = z.object({
  nodes: z.array(
    z.discriminatedUnion('type', [
      z.object({
        id: z.string(),
        type: z.literal('scene'),
        data: z.object({
          headline: z.string().nullable().optional(),
          text: z.string().nullable().optional(),
          option1: z.string().nullable().optional(),
          option2: z.string().nullable().optional(),
          option3: z.string().nullable().optional(),
        }),
      }),
      z.object({
        id: z.string(),
        type: z.enum(['start', 'random', 'stockUp']),
      }),
      z.object({
        id: z.string(),
        type: z.literal('end'),
        data: z.object({
          headline: z.string().nullable().optional(),
          text: z.string().nullable().optional(),
        }),
      }),
      z.object({
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
      }),
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
export type NodeType = GameSchema['nodes'][0];
