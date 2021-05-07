// https://www.terraform.io/docs/providers/google/r/spanner_database.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpannerDatabaseConfig extends cdktf.TerraformMetaArguments {
  /** An optional list of DDL statements to run inside the newly created
database. Statements can create tables, indexes, etc. These statements
execute atomically with the creation of the database: if there is an
error in any statement, the database is not created. */
  readonly ddl?: string[];
  readonly deletionProtection?: boolean;
  /** The instance to create the database on. */
  readonly instance: string;
  /** A unique identifier for the database, which cannot be changed after
the instance is created. Values are of the form [a-z][-a-z0-9]*[a-z0-9]. */
  readonly name: string;
  readonly project?: string;
  /** encryption_config block */
  readonly encryptionConfig?: SpannerDatabaseEncryptionConfig[];
  /** timeouts block */
  readonly timeouts?: SpannerDatabaseTimeouts;
}
export interface SpannerDatabaseEncryptionConfig {
  /** Fully qualified name of the KMS key to use to encrypt this database. This key must exist
in the same location as the Spanner Database. */
  readonly kmsKeyName: string;
}

function spannerDatabaseEncryptionConfigToTerraform(struct?: SpannerDatabaseEncryptionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}

export interface SpannerDatabaseTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function spannerDatabaseTimeoutsToTerraform(struct?: SpannerDatabaseTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class SpannerDatabase extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SpannerDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'google_spanner_database',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._ddl = config.ddl;
    this._deletionProtection = config.deletionProtection;
    this._instance = config.instance;
    this._name = config.name;
    this._project = config.project;
    this._encryptionConfig = config.encryptionConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ddl - computed: false, optional: true, required: false
  private _ddl?: string[];
  public get ddl() {
    return this.getListAttribute('ddl');
  }
  public set ddl(value: string[] ) {
    this._ddl = value;
  }
  public resetDdl() {
    this._ddl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddlInput() {
    return this._ddl
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean;
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean ) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance - computed: false, optional: false, required: true
  private _instance: string;
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig?: SpannerDatabaseEncryptionConfig[];
  public get encryptionConfig() {
    return this.interpolationForAttribute('encryption_config') as any;
  }
  public set encryptionConfig(value: SpannerDatabaseEncryptionConfig[] ) {
    this._encryptionConfig = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SpannerDatabaseTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SpannerDatabaseTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ddl: cdktf.listMapper(cdktf.stringToTerraform)(this._ddl),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      instance: cdktf.stringToTerraform(this._instance),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      encryption_config: cdktf.listMapper(spannerDatabaseEncryptionConfigToTerraform)(this._encryptionConfig),
      timeouts: spannerDatabaseTimeoutsToTerraform(this._timeouts),
    };
  }
}
