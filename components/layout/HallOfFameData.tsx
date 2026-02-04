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

export function HallOfFameData() {
  const [formData, setFormData] = useState({
    Topic: '',
    Fametype: '',
    Date: '',
    Bio: '',
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
      const { error } = await SupaClient.from('hall-of-fame').insert([formData]);

      if (error) {
        setAlertState({
          open: true,
          title: 'Error',
          message: `Failed to add fame entry: ${error.message}`,
          variant: 'error'
        });
      } else {
        setAlertState({
          open: true,
          title: 'Success',
          message: 'Fame entry added successfully!',
          variant: 'success'
        });
        // Reset form
        setFormData({
          Topic: '',
          Fametype: '',
          Date: '',
          Bio: '',
          imguri: ''
        });
      }
    } catch (err) {
      setAlertState({
        open: true,
        title: 'Error',
        message: 'An error occurred while adding the fame entry.',
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
            <FieldLegend>Add New Fame</FieldLegend>
            <FieldDescription>
              Fill in the required details to add a new fame to the community.
            </FieldDescription>

            <FieldGroup>
              <Field>
                <FieldLabel>Topic</FieldLabel>
                <Input
                  name="Topic"
                  value={formData.Topic}
                  onChange={handleInputChange}
                  placeholder="Full name or title"
                  required
                />
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel>Category</FieldLabel>
                  <Input
                    name="Fametype"
                    value={formData.Fametype}
                    onChange={handleInputChange}
                    placeholder="Fame type"
                    required
                  />
                </Field>

                <Field>
                  <FieldLabel>Date</FieldLabel>
                  <Input
                    name="Date"
                    value={formData.Date}
                    onChange={handleInputChange}
                    placeholder="e.g: 29/01/26"
                    required
                  />
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>

          <FieldSeparator />

          {/* Biography */}
          <FieldSet>
            <FieldLegend>Bio / Description</FieldLegend>
            <FieldGroup>
              <Field>
                <Textarea
                  name="Bio"
                  value={formData.Bio}
                  onChange={handleInputChange}
                  placeholder="Add about the description of the title...."
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
              placeholder="Cloudinary link of the respective image"
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
