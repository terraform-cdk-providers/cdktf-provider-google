// https://www.terraform.io/docs/providers/google/r/compute_subnetwork_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeSubnetworkIamMemberConfig extends cdktf.TerraformMetaArguments {
  readonly member: string;
  readonly project?: string;
  readonly region?: string;
  readonly role: string;
  readonly subnetwork: string;
  /** condition block */
  readonly condition?: ComputeSubnetworkIamMemberCondition[];
}
export interface ComputeSubnetworkIamMemberCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

function computeSubnetworkIamMemberConditionToTerraform(struct?: ComputeSubnetworkIamMemberCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


// Resource

export class ComputeSubnetworkIamMember extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeSubnetworkIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_subnetwork_iam_member',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._member = config.member;
    this._project = config.project;
    this._region = config.region;
    this._role = config.role;
    this._subnetwork = config.subnetwork;
    this._condition = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member - computed: false, optional: false, required: true
  private _member: string;
  public get member() {
    return this.getStringAttribute('member');
  }
  public set member(value: string) {
    this._member = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member
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

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role
  }

  // subnetwork - computed: false, optional: false, required: true
  private _subnetwork: string;
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: ComputeSubnetworkIamMemberCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: ComputeSubnetworkIamMemberCondition[] ) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      member: cdktf.stringToTerraform(this._member),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      role: cdktf.stringToTerraform(this._role),
      subnetwork: cdktf.stringToTerraform(this._subnetwork),
      condition: cdktf.listMapper(computeSubnetworkIamMemberConditionToTerraform)(this._condition),
    };
  }
}
