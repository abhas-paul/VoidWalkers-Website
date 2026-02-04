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

export function MemberData() {
  const [formData, setFormData] = useState({
    name: '',
    ctfRole: '',
    nickname: '',
    hackathonRole: '',
    specialmessage: '',
    funfact: '',
    history: '',
    Strengths: '',
    imgUri: ''
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
      const { error } = await SupaClient.from('members').insert([formData]);

      if (error) {
        setAlertState({
          open: true,
          title: 'Error',
          message: `Failed to add member: ${error.message}`,
          variant: 'error'
        });
      } else {
        setAlertState({
          open: true,
          title: 'Success',
          message: 'Member added successfully!',
          variant: 'success'
        });
        // Reset form
        setFormData({
          name: '',
          ctfRole: '',
          nickname: '',
          hackathonRole: '',
          specialmessage: '',
          funfact: '',
          history: '',
          Strengths: '',
          imgUri: ''
        });
      }
    } catch (err) {
      setAlertState({
        open: true,
        title: 'Error',
        message: 'An error occurred while adding the member.',
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
            <FieldLegend>Add New Members</FieldLegend>
            <FieldDescription>
              Fill in the required details to add a new member to the community.
            </FieldDescription>

            <FieldGroup>
              <Field>
                <FieldLabel>Name</FieldLabel>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Evil Rabbit"
                  required
                />
              </Field>

              {/* Role + Nickname */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel>Role for CTF</FieldLabel>
                  <Input
                    name="ctfRole"
                    value={formData.ctfRole}
                    onChange={handleInputChange}
                    placeholder="e.g.: Attacker"
                    required
                  />
                </Field>

                <Field>
                  <FieldLabel>Nickname</FieldLabel>
                  <Input
                    name="nickname"
                    value={formData.nickname}
                    onChange={handleInputChange}
                    placeholder="e.g.: Rabiot"
                    required
                  />
                </Field>
              </div>

              {/* Hackathon / Message / Fun Fact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Field>
                  <FieldLabel>Role for Hackathon</FieldLabel>
                  <Input
                    name="hackathonRole"
                    value={formData.hackathonRole}
                    onChange={handleInputChange}
                    placeholder="e.g.: Frontend"
                    required
                  />
                </Field>

                <Field>
                  <FieldLabel>Special Message</FieldLabel>
                  <Input
                    name="specialmessage"
                    value={formData.specialmessage}
                    onChange={handleInputChange}
                    placeholder="e.g.: Keep calm and..."
                    required
                  />
                </Field>

                <Field>
                  <FieldLabel>Fun Fact</FieldLabel>
                  <Input
                    name="funfact"
                    value={formData.funfact}
                    onChange={handleInputChange}
                    placeholder="e.g.: Loves dark mode"
                    required
                  />
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>

          <FieldSeparator />

          {/* History */}
          <FieldSet>
            <FieldLegend>History</FieldLegend>
            <FieldGroup>
              <Field>
                <Textarea
                  name="history"
                  value={formData.history}
                  onChange={handleInputChange}
                  placeholder="Add about the past history of the member here..."
                  className="resize-none"
                />
              </Field>
            </FieldGroup>
          </FieldSet>

          {/* Strengths */}
          <FieldSet>
            <FieldLegend>Strengths</FieldLegend>
            <FieldGroup>
              <Field>
                <Textarea
                  name="Strengths"
                  value={formData.Strengths}
                  onChange={handleInputChange}
                  placeholder="Add about the strengths of the member in maximum 4 points..."
                  className="resize-none"
                />
              </Field>
            </FieldGroup>
          </FieldSet>

          {/* Image URL */}
          <Field>
            <FieldLabel>Image URL</FieldLabel>
            <Input
              name="imgUri"
              value={formData.imgUri}
              onChange={handleInputChange}
              placeholder="Drive link of the member's image"
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
