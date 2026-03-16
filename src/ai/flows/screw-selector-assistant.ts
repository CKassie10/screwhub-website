'use server';
/**
 * @fileOverview An AI-powered screw selector assistant that helps users find the most suitable screw type
 * based on their specific application, materials, and environmental conditions.
 *
 * - screwSelectorAssistant - A function that handles the screw selection process.
 * - ScrewSelectorAssistantInput - The input type for the screwSelectorAssistant function.
 * - ScrewSelectorAssistantOutput - The return type for the screwSelectorAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ScrewSelectorAssistantInputSchema = z.object({
  applicationDescription: z
    .string()
    .describe('A detailed description of the application or project.'),
  materialType: z
    .string()
    .describe(
      'The type of materials being fastened (e.g., "wood to wood", "drywall to metal stud", "plastic to plastic").'
    ),
  environmentalConditions: z
    .string()
    .describe(
      'The environmental conditions where the screw will be used (e.g., "indoors, dry", "outdoors, marine environment", "high vibration", "high temperature").'
    ),
  fasteningRequirement: z
    .string()
    .describe(
      'Specific fastening requirements (e.g., strength, aesthetics, ease of removal, shear resistance, corrosion resistance, tamper-proof).')
    .optional(),
});
export type ScrewSelectorAssistantInput = z.infer<
  typeof ScrewSelectorAssistantInputSchema
>;

const ScrewSelectorAssistantOutputSchema = z.object({
  recommendedScrewType: z
    .string()
    .describe('The name of the most suitable screw type.'),
  reasoning: z
    .string()
    .describe(
      'A detailed explanation of why this screw type is recommended based on the provided inputs.'
    ),
  keyCharacteristics: z
    .array(z.string())
    .describe('A list of key features and properties of the recommended screw.'),
  materialFinishSuggestion: z
    .string()
    .describe('Suggested material and finish for the screw (e.g., "A2 Stainless Steel", "Zinc Plated").'),
  headDriveSuggestion: z
    .string()
    .describe('Suggested head style and drive type (e.g., "Countersunk Pozi", "Hex Washer Head").'),
  additionalTips: z
    .string()
    .describe(
      'Any additional advice or considerations for the user regarding installation or alternatives.'
    ).optional(),
});
export type ScrewSelectorAssistantOutput = z.infer<
  typeof ScrewSelectorAssistantOutputSchema
>;

export async function screwSelectorAssistant(
  input: ScrewSelectorAssistantInput
): Promise<ScrewSelectorAssistantOutput> {
  return screwSelectorAssistantFlow(input);
}

const screwSelectorPrompt = ai.definePrompt({
  name: 'screwSelectorPrompt',
  input: {schema: ScrewSelectorAssistantInputSchema},
  output: {schema: ScrewSelectorAssistantOutputSchema},
  prompt: `You are an expert screw selection assistant for ScrewHub, a specialist online store for screws. Your goal is to help users find the most suitable screw type for their specific needs based on the provided details.

Consider the following information provided by the user:

Application Description: {{{applicationDescription}}}
Materials to be fastened: {{{materialType}}}
Environmental Conditions: {{{environmentalConditions}}}
{{#if fasteningRequirement}}Fastening Requirements: {{{fasteningRequirement}}}{{/if}}

Based on this information, recommend the most suitable screw type. Provide a clear reasoning for your choice, list the key characteristics of the recommended screw, suggest an appropriate material/finish and head/drive style, and offer any additional tips.

Ensure your output strictly adheres to the JSON schema for ScrewSelectorAssistantOutput. Focus only on screw types that are commonly available for general, professional, or industrial use, matching the vast range offered by ScrewHub.`,
});

const screwSelectorAssistantFlow = ai.defineFlow(
  {
    name: 'screwSelectorAssistantFlow',
    inputSchema: ScrewSelectorAssistantInputSchema,
    outputSchema: ScrewSelectorAssistantOutputSchema,
  },
  async input => {
    const {output} = await screwSelectorPrompt(input);
    return output!;
  }
);
