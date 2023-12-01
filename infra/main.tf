
terraform {
    required_providers {
        azurerm = {
            source  = "hashicorp/azurerm"
            version = "2.60.0"
        }
    }
}

provider "azurerm" {
    features { }
}
resource "azurerm_resource_group" "beatbox" {
  name     = "beatbox-resources"
  location = "West US"
}

// Blob Storage
resource "azurerm_storage_account" "beatbox-storage" {
  name                     = "beatbox-storage"
  resource_group_name      = azurerm_resource_group.beatbox.name
  location                 = azurerm_resource_group.beatbox.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

resource "azurerm_storage_container" "beatbox-storage" {
  name                  = "beatbox-storage"
  storage_account_name  = azurerm_storage_account.beatbox-storage.name
  container_access_type = "blob"
}

// Web App Service
resource "azurerm_app_service_plan" "beatbox-app-service-plan" {
  name                = "beatbox-app-service-plan"
  location            = azurerm_resource_group.beatbox.location
  resource_group_name = azurerm_resource_group.beatbox.name
  kind                = "Linux"
  reserved            = true

  sku {
    tier = "Basic"
    size = "B1"
  }
}

resource "azurerm_app_service" "beatbox-app-service" {
  name                = "beatbox-app-service"
  location            = azurerm_resource_group.beatbox.location
  resource_group_name = azurerm_resource_group.beatbox.name
  app_service_plan_id = azurerm_app_service_plan.beatbox-app-service-plan.id

  site_config {
    always_on = true
    min_tls_version = "1.0"
    linux_fx_version = "DOCKER|beatbox.azurecr.io/beatbox:latest"
  }

  app_settings = {
    "WEBSITES_ENABLE_APP_SERVICE_STORAGE" = "false"
    "DOCKER_REGISTRY_SERVER_URL" = "https://beatbox.azurecr.io"
    "DOCKER_REGISTRY_SERVER_USERNAME" = "beatbox"
    "DOCKER_REGISTRY_SERVER_PASSWORD" = "password"
  }
}
