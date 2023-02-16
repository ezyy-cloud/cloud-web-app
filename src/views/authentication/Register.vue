<template>
  <div style="display: flex; justify-content: center; align-items: center;">
    <v-card class="pa-4 pt-7 card" max-width="448">
      <v-card-text class="pt-2">
        <h5 class="text-h5 font-weight-semibold">
          Sign Up
        </h5>
        <p class="mb-0">
          Please fill in the form to create an account
        </p>
      </v-card-text>

      <v-card-text>
        <v-form @submit.prevent="() => {}">
          <v-row>
            <!-- Username -->
            <v-col cols="12">
              <v-text-field
                variant="outlined"
                v-model="form.username"
                label="Username"
              />
            </v-col>
            <!-- email -->
            <v-col cols="12">
              <v-text-field
                variant="outlined"
                v-model="form.email"
                label="Email"
                type="email"
              />
            </v-col>

            <!-- password -->
            <v-col cols="12">
              <v-text-field
                v-model="form.password"
                label="Password"
                variant="outlined"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="
                  isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
                "
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />
              <div
                style="display: flex; justify-content: center; align-items: center;"
              >
                <v-checkbox
                  id="privacy-policy"
                  v-model="form.privacyPolicies"
                  inline
                >
                  <template v-slot:label>
                    <span class="me-1">I agree to</span>
                    <a
                      href="javascript:void(0)"
                      class="text-primary"
                      style="text-decoration: none; color: primary;"
                      >privacy policy & terms</a
                    >
                  </template></v-checkbox
                >
              </div>

              <v-btn block type="submit" rounded="pill" color="primary">
                Sign up
              </v-btn>
            </v-col>

            <!-- login instead -->
            <v-col cols="12" class="text-center text-base">
              <span>Already have an account?</span>
              <RouterLink
                class="text-primary ms-2"
                to="login"
                style="text-decoration: none; color: primary;"
              >
                Sign in instead
              </RouterLink>
            </v-col>

            <v-col cols="12" class="d-flex align-center">
              <v-divider />
              <span class="mx-4">or</span>
              <v-divider />
            </v-col>

            <!-- auth providers -->
            <v-col cols="12" class="text-center">
              <AuthProvider />
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import AuthProvider from "@/components/AuthProvider.vue";

const form = ref({
  username: "",
  email: "",
  password: "",
  privacyPolicies: false
});

const isPasswordVisible = ref(false);
</script>
<style lang="scss">
.card {
}
</style>
