"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import SupaClient from "@/lib/supabase/createClient"
import { NotificationAlert } from "@/components/blocks/admin-data/NotificationAlert"

export function LiveEventsData() {
  const [formData, setFormData] = useState({
    Topic: '',
    Sponsors: '',
    Venue: '',
    Mode: '',
    Prizepool: '',
    Judges: '',
    Requirement: '',
    Description: '',
    imguri: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertState, setAlertState] = useState<{
    open: boolean;
    title: string;
    message: string;
    variant: 'success' | 'error' | 'info';
  }>({
    open: false,
    title: '',
    message: '',
    variant: 'info'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await SupaClient.from('new-event').insert([formData]);

      if (error) {
        setAlertState({
          open: true,
          title: 'Error',
          message: `Failed to add event: ${error.message}`,
          variant: 'error'
        });
      } else {
        setAlertState({
          open: true,
          title: 'Success',
          message: 'Event added successfully!',
          variant: 'success'
        });
        // Reset form
        setFormData({
          Topic: '',
          Sponsors: '',
          Venue: '',
          Mode: '',
          Prizepool: '',
          Judges: '',
          Requirement: '',
          Description: '',
          imguri: ''
        });
      }
    } catch (err) {
      setAlertState({
        open: true,
        title: 'Error',
        message: 'An error occurred while adding the event.',
        variant: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-none min-w-0">
      <form className="w-full" onSubmit={handleSubmit}>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Add New Event</FieldLegend>
            <FieldDescription>
              Fill in the required details to add a new event to the community.
            </FieldDescription>

            <FieldGroup>
              <Field>
                <FieldLabel>Name of the Event</FieldLabel>
                <Input
                  name="Topic"
                  value={formData.Topic}
                  onChange={handleInputChange}
                  placeholder="e.g.: Null Hack 1.0"
                  required
                />
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel>Sponsors</FieldLabel>
                  <Input
                    name="Sponsors"
                    value={formData.Sponsors}
                    onChange={handleInputChange}
                    placeholder="e.g.: N/A"
                    required
                  />
                </Field>

                <Field>
                  <FieldLabel>Venue</FieldLabel>
                  <Input
                    name="Venue"
                    value={formData.Venue}
                    onChange={handleInputChange}
                    placeholder="e.g.: N/A"
                    required
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Field>
                  <FieldLabel>Mode</FieldLabel>
                  <Input
                    name="Mode"
                    value={formData.Mode}
                    onChange={handleInputChange}
                    placeholder="Online / offline"
                    required
                  />
                </Field>

                <Field>
                  <FieldLabel>Prize Pool</FieldLabel>
                  <Input
                    name="Prizepool"
                    value={formData.Prizepool}
                    onChange={handleInputChange}
                    placeholder="e.g.: 100Rs"
                    required
                  />
                </Field>

                <Field>
                  <FieldLabel>Judges</FieldLabel>
                  <Input
                    name="Judges"
                    value={formData.Judges}
                    onChange={handleInputChange}
                    placeholder="e.g.: Rabiot & Rakshak"
                    required
                  />
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>

          <FieldSeparator />

          <FieldSet>
            <FieldLegend>Requirement</FieldLegend>
            <FieldGroup>
              <Field>
                <Textarea
                  name="Requirement"
                  value={formData.Requirement}
                  onChange={handleInputChange}
                  placeholder="Add about the needed or wanted qualities from the participants to take part..."
                  className="resize-none"
                />
              </Field>
            </FieldGroup>
          </FieldSet>

          {/* Description */}
          <FieldSet>
            <FieldLegend>Description</FieldLegend>
            <FieldGroup>
              <Field>
                <Textarea
                  name="Description"
                  value={formData.Description}
                  onChange={handleInputChange}
                  placeholder="Add other informations like problem statements etc..."
                  className="resize-none"
                />
              </Field>
            </FieldGroup>
          </FieldSet>

          {/* Image URL */}
          <Field>
            <FieldLabel>Image URL</FieldLabel>
            <Input
              name="imguri"
              value={formData.imguri}
              onChange={handleInputChange}
              placeholder="Cloudinary link of the member's image"
              required
            />
          </Field>

          {/* Actions */}
          <Field orientation="horizontal" className="gap-3">
            <Button
              style={{ cursor: 'pointer' }}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </Field>
        </FieldGroup>
      </form>

      <NotificationAlert
        open={alertState.open}
        title={alertState.title}
        message={alertState.message}
        variant={alertState.variant}
        onClose={() => setAlertState({ ...alertState, open: false })}
      />
    </div>
  )
}
